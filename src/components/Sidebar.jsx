import { useState} from 'react'
import { Sidebar as Side } from 'primereact/sidebar';
import { Button } from 'primereact/button';
export default function Sidebar() {
const [visible, setVisible] = useState(false);

return (
  <div className="card flex justify-content-center">
    <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
    <Side
      visible={visible}
      onHide={() => setVisible(false)}
      content={({ closeIconRef, hide }) => (
        <div className="min-h-screen flex relative lg:static surface-ground">
          <div
            id="app-sidebar-2"
            className=""
            style={{ width: "280px" }}
          >
            <div className="flex flex-column h-full">
              <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                <span className="inline-flex align-items-center gap-2">
                  
                </span>
                <span>
                  <Button
                    type="button"
                    ref={closeIconRef}
                    onClick={(e) => hide(e)}
                    icon="pi pi-times"
                    className="h-4 w-4 w-2rem"
                  ></Button>
                </span>
              </div>
              <div className="overflow-y-auto">
                
              </div>
            </div>
          </div>
        </div>
      )}
    ></Side>
  </div>
);
}
