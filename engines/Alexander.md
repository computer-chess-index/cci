# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3162<sub>(+3) | 3387<sub>(+16) | 3443<sub>(+17) |  |
| 8.2 | 2026-03-23 | 3159<sub>(-26) | 3371<sub>(-8) | 3426<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3185<sub>(+39) | 3379<sub>(-11) | 3438<sub>(+10) |  |
| 8.0 | 2026-03-10 | 3146 | 3390 | 3428 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-08 04:35:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3146, 3185, 3159, 3162]
  line "STC (8.0+0.08s)" [3146, 3185, 3159, 3162]
  line "LTC (60.0+0.60s)" [3390, 3379, 3371, 3387]
  line "" [3428, 3438, 3426, 3443]
  line "VLTC (2m24s+1.12s)" [3428, 3438, 3426, 3443]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 22 | 534 | 50% | 3445 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3387 | 22 | 514 | 48% | 3402 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3162 | 24 | 500 | 52% | 3147 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 26 | 380 | 49% | 3434 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 31 | 284 | 50% | 3370 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3159 | 27 | 396 | 48% | 3173 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 28 | 324 | 49% | 3444 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 30 | 290 | 51% | 3372 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3185 | 31 | 302 | 49% | 3191 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 28 | 308 | 50% | 3425 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3390 | 28 | 332 | 50% | 3389 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3146 | 31 | 300 | 49% | 3151 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |