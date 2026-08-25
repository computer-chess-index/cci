# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3121<sub>(+56) | 3370<sub>(+102) | 3402<sub>(+55) |  |
| 1.0.1 | 2026-07-27 | 3065<sub>(0) | 3268<sub>(-23) | 3347<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3065 | 3291 | 3343 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:40:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3065, 3065, 3121]
  line "STC (8.0+0.08s)" [3065, 3065, 3121]
  line "LTC (60.0+0.60s)" [3291, 3268, 3370]
  line "VLTC (2m24s+1.12s)" [3343, 3347, 3402]
  line "VLTC (2m24s+1.12s)" [3343, 3347, 3402]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3402 | 40 | 152 | 52% | 3387 | 74% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 44 | 132 | 50% | 3366 | 69% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 3121 | 48 | 120 | 50% | 3124 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3347 | 37 | 184 | 48% | 3357 | 68% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3268 | 37 | 184 | 49% | 3272 | 66% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 3065 | 46 | 132 | 52% | 3052 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3343 | 40 | 160 | 55% | 3297 | 71% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3291 | 40 | 166 | 55% | 3240 | 62% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 3065 | 49 | 120 | 55% | 3011 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |