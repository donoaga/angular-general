import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {PostModel} from '../../../../core/models/PostModel';
import {PostsService} from '../../../../core/services/posts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {
  tableData: PostModel[];
  displayedColumns: string[] = ['select', 'id', 'title', 'body', 'actions'];
  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<PostModel>;
  inverted: boolean;
  searchValue: string;
  query = {
    _start: 0,
    _limit: 10
  };

  constructor(public postsService: PostsService) {
  }

  ngOnInit(): void {
    this.inverted = false;
    this.selection = new SelectionModel<PostModel>(this.allowMultiSelect, this.initialSelection);
    this.getPostsData();
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tableData.forEach(row => this.selection.select(row));
  }

  itemSelected(event, row): void {
    if (event) {
      alert(`Selectet item with\nid: ${row.id}\nName: ${row.title}`);
      this.selection.toggle(row);
    }
  }

  orderReverse(): void {
    let ret = [];
    for (let i = this.tableData.length - 1; i >= 0; i--) {
      ret.push(this.tableData[i]);
    }
    this.tableData = ret;
    this.inverted = !this.inverted;
  }

  search(): void {
    // the free api i chose have no search implemented

    if (this.searchValue && this.searchValue.length > 2) {
      const searchTable = [];
      for (let i = 0; i < this.tableData.length; i++) {
        const findInTitle = this.tableData[i].title.toString().toLowerCase().indexOf(this.searchValue.toLowerCase());
        const findInBody = this.tableData[i].body.toString().toLowerCase().indexOf(this.searchValue.toLowerCase());
        if (findInBody > -1 || findInTitle > -1) {
          searchTable.push(this.tableData[i]);
        }
      }
      this.tableData = searchTable;
    } else {
      this.getPostsData(false);
    }
  }

  getPostsData(loadMore?: boolean): void {
    const q = this.query;

    if (this.inverted) {
      this.orderReverse();
    }

    if (loadMore) {
      q._start = this.tableData.length;
    }
    this.postsService.getPostsData(q).subscribe((res) => {
      if (this.query._start === 0) {
        this.tableData = res;
      } else {
        this.tableData = this.tableData.concat(res);
      }
    });
  }
}
