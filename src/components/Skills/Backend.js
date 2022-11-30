import React from 'react'
import './Skills.css'

export default function Backend() {
  return (
    <div className='skills__content'>
            <h3 className='skills__title'>BackEnd</h3>

            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>
                        <div >

                            <h3 className='skills__name'> Node</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>
                        <div >

                            <h3 className='skills__name'>Express </h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>
                        <div >

                            <h3 className='skills__name'>Mongodb </h3>
                            <span className='skills__level'>intermediate</span>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>
                        <div >

                            <h3 className='skills__name'>Laravel </h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>
                        <div >

                            <h3 className='skills__name'>MySql </h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
                 
                </div>
            </div>

        </div>
  )
}
