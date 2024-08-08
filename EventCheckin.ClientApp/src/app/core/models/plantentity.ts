
import { modelsdata } from './modelsdata'

export class plantentity {
  id: number = 0;
  name: string;
  description: string;
  loss: string;
  probenchatrnodetype: string;
  hierarchyLevel : string;
  type: number;
  parentId: number = 0;
  man : number = 0;
  parent: string;
  published : boolean;
  mandatory: boolean;
  children?: plantentity[];
  c?: plantentity[];
  constructor() {
    this.name= "",
    this.description = '';
    this.type = 4;
    this.parent = '';
    this.probenchatrnodetype = 'q';
  }

  static newQuestion(parenttype: number) {
    const type = modelsdata.childnoderule()[parenttype];
    return {
      name: "",
      description: "",
      loss: "",
      hierarchyLevel : '',
      parentId : 0,
      man : 0,
      published : false,
      probenchatrnodetype: 'q',
      type: type ? type : 2,
      mandatory: false
    } as plantentity;
  }

  static newQuestionWithType(hierarchyLevel: string) {
    return {
      name: "",
      description: "",
      loss: '',
      probenchatrnodetype: 'q',
      hierarchyLevel : hierarchyLevel,
      parentId : 0,
      published : false,
      man : 0,
      mandatory: false
    } as plantentity;
  }

  static questionCopy(node: plantentity) {
    return {
      name: node.name,
      description: node.description,
      loss: node.loss,
      probenchatrnodetype: node.probenchatrnodetype,
      type: node.type,
      hierarchyLevel: node.hierarchyLevel,
      parentId: node.parentId,
      man: node.man,
      published : node.published,
      mandatory: node.mandatory
    } as plantentity;
  }

  static newQuestionCopy(node: plantentity) {
    return {
      name: "",
      description: node.description,
      loss: node.loss,
      probenchatrnodetype: node.probenchatrnodetype,
      type: node.type,
      hierarchyLevel: node.hierarchyLevel,
      parentId: node.parentId,
      man: node.man,
      published : node.published,
      mandatory: node.mandatory
    } as plantentity;
  }
}
