# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.3 | 2026-08-21 | 3237<sub>(-8) | 3455<sub>(+12) | 3490<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3245<sub>(+51) | 3443<sub>(-2) | 3471<sub>(-30) |  |
| 4.2.1 | 2026-08-09 | 3194<sub>(+new) | 3445<sub>(+new) | 3501<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.2.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:25:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3194, 3245, 3237]
  line "STC (8.0+0.08s)" [3194, 3245, 3237]
  line "LTC (60.0+0.60s)" [3445, 3443, 3455]
  line "VLTC (2m24s+1.12s)" [3501, 3471, 3490]
  line "VLTC (2m24s+1.12s)" [3501, 3471, 3490]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 176 | 6 | 50% | 3453 | 100% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3329 | 116 | 18 | 50% | 3328 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 36 | 190 | 51% | 3484 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 30 | 266 | 48% | 3468 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3237 | 35 | 212 | 49% | 3249 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 32 | 240 | 50% | 3472 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 32 | 236 | 50% | 3444 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3245 | 33 | 248 | 51% | 3243 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 56 | 88 | 59% | 3343 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 47 | 128 | 59% | 3272 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3194 | 45 | 152 | 56% | 3071 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |