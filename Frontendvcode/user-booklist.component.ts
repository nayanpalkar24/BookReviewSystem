import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { books } from '../../admin/admin-booklist/admin-booklist.component';
import { ApibookService } from '../../services/apibook.service';

@Component({
  selector: 'app-user-booklist',
  templateUrl: './user-booklist.component.html',
  styleUrls: ['./user-booklist.component.css']
})
export class UserBooklistComponent implements OnInit {

  book: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  status: boolean = false;
  displayedColumns: string[] = ['id', 'author', 'name', 'category', 'price', 'rate'];
  dataSource: MatTableDataSource<books>;

  constructor(private router: Router, private bookService: ApibookService) { }

  ngOnInit(): void {
    this.getBookList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getBookList() {
    this.bookService.apiBookList().subscribe((res) => {
      this.book = res;
      this.dataSource = new MatTableDataSource(this.book);
      this.dataSource.sort = this.sort; // Add this line to initialize sorting
    });
  }

  applyFilter(event: Event) {
    this.status = true;
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length === 0) {
      this.status = false;
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  rateBook(id: number) {
    this.router.navigate(['/userbkrt/' + id]);
  }

}
