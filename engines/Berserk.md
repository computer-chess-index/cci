# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.7.0 | 2026-05-24 |  |  |  |  |
| 14 | 2026-05-24 | 3428<sub>(+1839) | 3538<sub>(+17) | 3571<sub>(+26) |  |
| 13 | 2024-03-31 | 1589 | 3521 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A4.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:23:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1500 --> 3600
  line "STC (8.0+0.08s)" [1589, 3428]
  line "STC (8.0+0.08s)" [1589, 3428]
  line "LTC (60.0+0.60s)" [3521, 3538]
  line "VLTC (2m24s+1.12s)" [3545, 3571]
  line "VLTC (2m24s+1.12s)" [3545, 3571]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 31 | 236 | 51% | 3565 | 93% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 32 | 224 | 50% | 3537 | 90% |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3428 | 26 | 386 | 53% | 3347 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 13 | 1458 | 53% | 3471 | 84% |
| 13 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 12 | 1740 | 51% | 3517 | 87% |
| 13 | STC <sub>(8.0+0.08s)</sub> | 1589 | 15 | 1932 | 53% | 1548 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |