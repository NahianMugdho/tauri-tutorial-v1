// projects.js — সব প্রজেক্ট এক জায়গায় (শেখার ক্রমে)
import calcV2 from "./calcV2";
import calcCli from "./calcCli";
import miniNotes from "./miniNotes";
import mysqlProject from "./mysqlProject";
import mongoProject from "./mongoProject";

export const projects = [calcV2, calcCli, miniNotes, mysqlProject, mongoProject];
export const findProject = (slug) => projects.find((p) => p.slug === slug);
