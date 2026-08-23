# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3479<sub>(+53) | 3582<sub>(+25) | 3613<sub>(+23) |  |
| 0.9.3 | 2026-07-26 | 3426<sub>(-4) | 3557<sub>(-10) | 3590<sub>(+25) |  |
| 0.9.2 | 2026-07-16 | 3430<sub>(+233) | 3567<sub>(+165) | 3565<sub>(+95) |  |
| 0.9.1 | 2026-07-14 | 3197 | 3402 | 3470 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coda+<version>&body=###%20Engine%20name%0ACoda%0A%0A###%20Version%0A0.9.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:24:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3100 --> 3700
  line "STC (8.0+0.08s)" [3197, 3430, 3426, 3479]
  line "STC (8.0+0.08s)" [3197, 3430, 3426, 3479]
  line "LTC (60.0+0.60s)" [3402, 3567, 3557, 3582]
  line "VLTC (2m24s+1.12s)" [3470, 3565, 3590, 3613]
  line "VLTC (2m24s+1.12s)" [3470, 3565, 3590, 3613]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3613 | 77 | 40 | 56% | 3568 | 78% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3582 | 76 | 38 | 51% | 3572 | 92% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3479 | 42 | 132 | 53% | 3459 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 43 | 124 | 53% | 3571 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 32 | 228 | 51% | 3549 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3426 | 30 | 276 | 50% | 3425 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 32 | 214 | 51% | 3559 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 36 | 178 | 50% | 3565 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3430 | 27 | 328 | 48% | 3444 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 39 | 166 | 55% | 3420 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3402 | 42 | 152 | 55% | 3341 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3197 | 41 | 172 | 52% | 3163 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |