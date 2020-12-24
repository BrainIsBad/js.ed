import * as $ from 'jquery'
import Post from './Post'
import json from './assets/json'
import xml from './assets/data.xml'
import logo from './assets/logo.png'
import './styles/style.css'

const post = new Post('New post', logo)

$('pre').html(post.toString())

console.log(json)
console.log(xml)