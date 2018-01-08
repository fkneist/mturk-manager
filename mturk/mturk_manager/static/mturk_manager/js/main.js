$(document).ready(function()
{
	$('#modal_update_template').on('show.bs.modal', function (event) 
	{
		const button = $(event.relatedTarget) // Button that triggered the modal
		const id = button.data('id') // Extract info from data-* attributes
		const name = button.data('name') // Extract info from data-* attributes
		const height_frame = button.data('height_frame') // Extract info from data-* attributes
		const id_template_assignment = button.data('id_template_assignment') // Extract info from data-* attributes
		const modal = $(this)

		modal.find('input[name="id"]').val(id);
		modal.find('input[name="name"]').val(name);
		modal.find('input[name="height_frame"]').val(height_frame);
		modal.find('select[name="template_assignment"]').val(id_template_assignment);
	})

	$('#modal_update_template_assignment').on('show.bs.modal', function (event) 
	{
		const button = $(event.relatedTarget) // Button that triggered the modal
		const id = button.data('id') // Extract info from data-* attributes
		const name = button.data('name') // Extract info from data-* attributes
		const modal = $(this)

		modal.find('input[name="id"]').val(id);
		modal.find('input[name="name"]').val(name);
	})
});