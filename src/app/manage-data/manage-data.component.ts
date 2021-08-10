import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Feedback } from '../feedback.model';
@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {
  editFeed = false;
  feedIndex: number;
  isVisible: true;
  data = {
    feedbacks: [
      {
        email: 'abc@gmail.com',
        subject: 'Pontiac',
        description: 'GTO'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Pontiac',
        description: 'Firebird'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Chevrolet',
        description: 'Malibu SS 396'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Chevrolet',
        description: 'Camaro SS'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Chevrolet',
        description: 'Camaro Z/28'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Chevrolet',
        description: 'RS'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Chevrolet',
        description: 'Nova SS'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Oldsmobile',
        description: '442'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Buick',
        description: 'Gran Sport'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Ford',
        description: 'Mustang GT'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Ford',
        description: 'Mustang GTA'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Ford',
        description: 'Fairlane GTA'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Shelby',
        description: 'Cobra'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Shebly',
        description: 'Mustang GT350'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Shelby',
        description: 'GT500'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Mercury',
        description: 'Cougar Special'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Mercury',
        description: 'Cyclone GT'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Mercury',
        description: '427 Comet'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Plymouth',
        description: 'Barracudda Formula S'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Plymouth GTX',
        description: 'GTO'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Dodge',
        description: 'Dart GT'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Dodge Dart GTS',
        description: 'GTO'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Dodge',
        description: 'Charger'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Dodge',
        description: 'Coronet R/T'
      },
      {
        email: 'abc@gmail.com',
        subject: 'Dodge',
        description: 'Coronet 500 Hemi'
      }
    ]
  };
  feedbacks: Feedback[] = [];

  @ViewChild('feedBackform') feedForm: NgForm;

  constructor() {
    for (let key in this.data.feedbacks) {
    this.feedbacks.push(new Feedback(this.data.feedbacks[key]['email'],this.data.feedbacks[key]['subject'],this.data.feedbacks[key]['description']))
  }
}

  ngOnInit() {}
  onAddFeedback(form: NgForm) {
    const fvalue = form.value;

    if (this.editFeed) {
      this.feedbacks[this.feedIndex].email = fvalue.email;
      this.feedbacks[this.feedIndex].subject = fvalue.subject;
      this.feedbacks[this.feedIndex].description = fvalue.description;
    } else {
      this.feedbacks.push(
        new Feedback(fvalue.email, fvalue.subject, fvalue.description)
      );
    }

    this.editFeed = false;
    form.reset();
  }

  onCancel() {
    this.editFeed = false;
  }

  onDelete(index) {
    this.feedbacks.splice(index, 1);
  }

  onEdit(i) {
    this.feedForm.setValue({
      email: this.feedbacks[i].email,
      subject: this.feedbacks[i].subject,
      description: this.feedbacks[i].description
    });
    this.feedIndex = i;
    this.editFeed = true;
  }
}
