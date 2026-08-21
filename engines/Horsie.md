# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3347<sub>(+15) | 3495<sub>(+13) | 3526<sub>(-6) |  |
| 1.0 | 2025-01-08 | 3332 | 3482 | 3532 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Horsie+<version>&body=###%20Engine%20name%0AHorsie%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:26:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3332, 3347]
  line "STC (8.0+0.08s)" [3332, 3347]
  line "LTC (60.0+0.60s)" [3482, 3495]
  line "VLTC (2m24s+1.12s)" [3532, 3526]
  line "VLTC (2m24s+1.12s)" [3532, 3526]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 16 | 906 | 50% | 3525 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 16 | 898 | 51% | 3491 | 83% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3347 | 16 | 1050 | 50% | 3348 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 28 | 304 | 49% | 3537 | 86% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 26 | 348 | 51% | 3474 | 85% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3332 | 29 | 292 | 49% | 3336 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |