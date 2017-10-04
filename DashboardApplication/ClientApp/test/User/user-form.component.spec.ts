import { UserFormComponent, FormType } from "../../app/User/user-form.component";

describe("UserFormComponent (Isolated)", () => {
    let component: UserFormComponent;

    beforeEach(() => {
        component = new UserFormComponent(undefined, undefined);
    });

    it("should get correct title based on form type", () => {
		// checking for Add form type
        component.formType = FormType.Add;
        expect(component.title).toEqual("Add New User");

        // checking for Edit form type
        component.formType = FormType.Edit;
        expect(component.title).toEqual("Edit User");
    });
});