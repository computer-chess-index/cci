# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3123<sub>(+57) | 3371<sub>(+101) | 3403<sub>(+55) |  |
| 1.0.1 | 2026-07-27 | 3066<sub>(0) | 3270<sub>(-23) | 3348<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3066 | 3293 | 3344 |  |
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

Generated: 2026-08-26 06:36:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3066, 3066, 3123]
  line "STC (8.0+0.08s)" [3066, 3066, 3123]
  line "LTC (60.0+0.60s)" [3293, 3270, 3371]
  line "VLTC (2m24s+1.12s)" [3344, 3348, 3403]
  line "VLTC (2m24s+1.12s)" [3344, 3348, 3403]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3403 | 40 | 156 | 52% | 3389 | 74% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 44 | 132 | 50% | 3367 | 69% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 3123 | 48 | 120 | 50% | 3125 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3348 | 37 | 184 | 48% | 3359 | 68% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3270 | 37 | 184 | 49% | 3274 | 66% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 3066 | 46 | 132 | 52% | 3054 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3344 | 40 | 160 | 55% | 3298 | 71% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3293 | 40 | 166 | 55% | 3241 | 62% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 3066 | 49 | 120 | 55% | 3012 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |