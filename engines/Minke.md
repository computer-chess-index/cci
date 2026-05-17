# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3213<sub>(+28) | 3420<sub>(+53) | 3480<sub>(+44) |  |
| 5.0.0 | 2026-02-13 | 3185<sub>(+61) | 3367<sub>(+43) | 3436<sub>(+88) |  |
| 4.0.0 | 2025-12-29 | 3124<sub>(+93) | 3324<sub>(+62) | 3348<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 3031<sub>(+new) | 3262<sub>(+new) | 3298<sub>(+new) |  |
| 2.0.0 | 2025-09-14 |  |  |  |  |
| 1.0.0 | 2025-08-26 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A6.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:26:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3031, 3124, 3185, 3213]
  line "STC (8.0+0.08s)" [3031, 3124, 3185, 3213]
  line "LTC (60.0+0.60s)" [3262, 3324, 3367, 3420]
  line "VLTC (2m24s+1.12s)" [3298, 3348, 3436, 3480]
  line "VLTC (2m24s+1.12s)" [3298, 3348, 3436, 3480]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3480 | 28 | 314 | 50% | 3480 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 28 | 310 | 50% | 3417 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3213 | 31 | 274 | 50% | 3216 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3436 | 24 | 414 | 50% | 3437 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 26 | 382 | 51% | 3359 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3185 | 25 | 444 | 51% | 3181 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3348 | 30 | 276 | 51% | 3339 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3324 | 31 | 268 | 48% | 3339 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3124 | 33 | 252 | 51% | 3096 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3298 | 37 | 184 | 50% | 3299 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3262 | 32 | 252 | 48% | 3276 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3031 | 34 | 240 | 48% | 3042 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |