# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2539<sub>(+233) | 2786<sub>(+234) | 2862<sub>(+251) |  |
| 1.0 | 2026-01-01 | 2306 | 2552 | 2611 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Revolver+<version>&body=###%20Engine%20name%0ARevolver%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 08:20:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2306, 2539]
  line "STC (8.0+0.08s)" [2306, 2539]
  line "LTC (60.0+0.60s)" [2552, 2786]
  line "VLTC (2m24s+1.12s)" [2611, 2862]
  line "VLTC (2m24s+1.12s)" [2611, 2862]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 43 | 168 | 55% | 2812 | 38% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2786 | 51 | 120 | 55% | 2745 | 39% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2539 | 47 | 148 | 48% | 2558 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2611 | 27 | 450 | 46% | 2651 | 32% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2552 | 29 | 408 | 49% | 2562 | 25% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2306 | 26 | 516 | 51% | 2294 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |