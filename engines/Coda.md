# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3476<sub>(+48) | 3551<sub>(-6) | 3594<sub>(+4) |  |
| 0.9.3 | 2026-07-26 | 3428<sub>(-2) | 3557<sub>(-11) | 3590<sub>(+25) |  |
| 0.9.2 | 2026-07-16 | 3430<sub>(+232) | 3568<sub>(+165) | 3565<sub>(+95) |  |
| 0.9.1 | 2026-07-14 | 3198 | 3403 | 3470 |  |
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

Generated: 2026-08-25 06:24:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3198, 3430, 3428, 3476]
  line "STC (8.0+0.08s)" [3198, 3430, 3428, 3476]
  line "LTC (60.0+0.60s)" [3403, 3568, 3557, 3551]
  line "VLTC (2m24s+1.12s)" [3470, 3565, 3590, 3594]
  line "VLTC (2m24s+1.12s)" [3470, 3565, 3590, 3594]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 52 | 84 | 52% | 3576 | 86% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 36 | 178 | 49% | 3555 | 85% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3476 | 31 | 238 | 51% | 3468 | 84% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 43 | 124 | 53% | 3571 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 32 | 228 | 51% | 3549 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3428 | 30 | 276 | 50% | 3426 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 32 | 214 | 51% | 3559 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3568 | 36 | 178 | 50% | 3567 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3430 | 27 | 328 | 48% | 3444 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 39 | 166 | 55% | 3421 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 42 | 152 | 55% | 3341 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3198 | 41 | 172 | 52% | 3164 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |