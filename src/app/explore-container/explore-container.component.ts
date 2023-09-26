import { Component, Input, OnInit } from '@angular/core';
import { SfxAndroidDevice } from 'sfx-deviceid-android';
import { DeviceInfo } from 'sfx-deviceid-android/dist/esm/dtos/device-info-dto';
import { DocumentProcessor } from 'sfx-document-processor';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name?: string;

  deviceId: string | null = null;

  deviceInfo: string | null = null;

  async ngOnInit(): Promise<void> {
    SfxAndroidDevice.getDeviceId({ value: undefined }).then((result) => {
      this.deviceId = result.value;
    });

    await SfxAndroidDevice.echo({ value: '' });
  }

  start() {
    DocumentProcessor.initialize({
      mode: 'MODE_CAPTURE',
      imageString: undefined,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
