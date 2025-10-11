import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-common-table-feed',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './common-table-feed.html',
    styleUrl: './common-table-feed.scss'
})

export class CommonTableFeed implements OnInit {
    constructor() { }

    ngOnInit() {
        
    }
    users = [
        {
            avatar: 'assets/avatars/avatar1.jpg',
            status: 'success',
            name: 'John Doe',
            state: 'California',
            registered: '2023-01-12',
            country: 'US',
            usage: 75,
            period: 'Jan 2025',
            color: 'info',
            payment: 'Visa',
            activity: '2025-10-10 14:30',
        },
        {
            avatar: 'assets/avatars/avatar2.jpg',
            status: 'warning',
            name: 'Jane Smith',
            state: 'Texas',
            registered: '2022-11-05',
            country: 'US',
            usage: 45,
            period: 'Oct 2025',
            color: 'warning',
            payment: 'Mastercard',
            activity: '2025-10-09 10:20',
        },
        {
            avatar: 'assets/avatars/avatar3.jpg',
            status: 'danger',
            name: 'Alex Johnson',
            state: 'New York',
            registered: '2023-03-20',
            country: 'US',
            usage: 90,
            period: 'Sep 2025',
            color: 'danger',
            payment: 'Amex',
            activity: '2025-10-08 18:45',
        },
        // Add more users as needed
    ];
}