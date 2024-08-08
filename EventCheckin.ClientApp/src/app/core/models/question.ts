
import { modelsdata } from './modelsdata';

export class question {
  id: number = 0;
  name: string ='';
  description: string ='';
  loss: string = '';
  probenchatrnodetype: string ='';
  type: number = 0;
  parentId: number = 0;
  equipmentId: number = 0;
  mandatory: boolean = false;
  isDefault: boolean = false;
  children?: question[];
  equipmentIds?: number[];
  category: string ='';
  subCategory: string ='';
  constructor() {
    this.name= '',
    this.description = '';
    this.type = 4;
    this.parentId = 0;
    this.probenchatrnodetype = 'q';
  }

  static newQuestion(parenttype: number) {
    const type = modelsdata.childnoderule()[parenttype];
    return {
      name: '',
      description: '',
      loss: '',
      probenchatrnodetype: 'q',
      type: type ? type : 2,
      mandatory: false
    } as question;
  }

  static newQuestionWithType(type: string) {
    return {
      name: '',
      description: '',
      loss: type,
      probenchatrnodetype: 'q',
      mandatory: false
    } as question;
  }

  static questionCopy(node: question) {
    return {
      name: node.name,
      description: node.description,
      loss: node.loss,
      probenchatrnodetype: node.probenchatrnodetype,
      type: node.type,
      mandatory: node.mandatory
    } as question;
  }

  static newQuestionCopy(node: question) {
    return {
      name: '',
      description: node.description,
      loss: node.loss,
      probenchatrnodetype: node.probenchatrnodetype,
      type: node.type,
      mandatory: node.mandatory
    } as question;
  }
}
