# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3463<sub>(+29) | 3569<sub>(+6) | 3587<sub>(+26) |  |
| 7.0.0 | 2025-09-25 | 3434<sub>(+new) | 3563<sub>(+new) | 3561<sub>(+6) |  |
| 6.0.2 | 2025-06-06 |  |  | 3555<sub>(+2) |  |
| 5.0.0 | 2025-03-23 | 3363<sub>(+4) | 3529<sub>(+new) | 3553<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3359<sub>(+66) |  | 3529<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3293<sub>(-29) | 3434<sub>(-33) | 3525<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3322 | 3467 | 3502 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PlentyChess+<version>&body=###%20Engine%20name%0APlentyChess%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:27:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3322, 3293, 3363, 3434, 3463]
  line "STC (8.0+0.08s)" [3322, 3293, 3363, 3434, 3463]
  line "LTC (60.0+0.60s)" [3467, 3434, 3529, 3563, 3569]
  line "VLTC (2m24s+1.12s)" [3502, 3525, 3553, 3561, 3587]
  line "VLTC (2m24s+1.12s)" [3502, 3525, 3553, 3561, 3587]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3587 | 41 | 136 | 52% | 3575 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3569 | 40 | 140 | 50% | 3571 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3463 | 33 | 216 | 48% | 3476 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 24 | 392 | 51% | 3556 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3563 | 42 | 130 | 50% | 3560 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3434 | 35 | 204 | 49% | 3436 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 34 | 192 | 51% | 3551 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 26 | 332 | 51% | 3544 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 68 | 48 | 48% | 3542 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3363 | 208 | 4 | 50% | 3364 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 20 | 600 | 50% | 3528 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3359 | 59 | 72 | 52% | 3341 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 21 | 544 | 50% | 3522 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 36 | 208 | 50% | 3428 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3293 | 33 | 248 | 47% | 3310 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 23 | 460 | 52% | 3488 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 63 | 64 | 63% | 3364 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3322 | 98 | 92 | 92% | 2522 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |