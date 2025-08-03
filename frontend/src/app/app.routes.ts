import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: "Home"},
    {path: "clothes", component: ClothesComponent, title: "Clothes"},
    {path: "accessories", component: AccessoriesComponent, title: "Accessories"},
    {path: "furniture", component: FurnitureComponent, title: "Furniture"},
    {path: "**", component: NotFoundComponent, title: "Page not found"},




];
