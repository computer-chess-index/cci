# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2851<sub>(+28) | 3124<sub>(+78) | 3168<sub>(+43) |  |
| 3.1 | 2026-04-03 | 2823<sub>(+100) | 3046<sub>(+60) | 3125<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2723 | 2986 | 3063 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:32:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "STC (8.0+0.08s)" [2723, 2823, 2851]
  line "STC (8.0+0.08s)" [2723, 2823, 2851]
  line "LTC (60.0+0.60s)" [2986, 3046, 3124]
  line "VLTC (2m24s+1.12s)" [3063, 3125, 3168]
  line "VLTC (2m24s+1.12s)" [3063, 3125, 3168]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 28 | 350 | 49% | 3178 | 53% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3124 | 28 | 364 | 51% | 3117 | 47% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2851 | 27 | 440 | 50% | 2855 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3125 | 29 | 352 | 50% | 3127 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3046 | 27 | 406 | 50% | 3043 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2823 | 28 | 384 | 50% | 2820 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3063 | 31 | 318 | 52% | 3044 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2986 | 29 | 344 | 52% | 2966 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2723 | 29 | 386 | 52% | 2692 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |