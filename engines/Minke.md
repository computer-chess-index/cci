# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3155<sub>(+24) | 3368<sub>(+52) | 3425<sub>(+41) |  |
| 5.0.0 | 2026-02-13 | 3131<sub>(+61) | 3316<sub>(+44) | 3384<sub>(+87) |  |
| 4.0.0 | 2025-12-29 | 3070<sub>(+93) | 3272<sub>(+63) | 3297<sub>(+52) |  |
| 3.0.0 | 2025-10-20 | 2977 | 3209 | 3245 |  |
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

Generated: 2026-08-26 06:27:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2977, 3070, 3131, 3155]
  line "STC (8.0+0.08s)" [2977, 3070, 3131, 3155]
  line "LTC (60.0+0.60s)" [3209, 3272, 3316, 3368]
  line "VLTC (2m24s+1.12s)" [3245, 3297, 3384, 3425]
  line "VLTC (2m24s+1.12s)" [3245, 3297, 3384, 3425]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 23 | 446 | 50% | 3429 | 77% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 24 | 432 | 50% | 3368 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3155 | 27 | 382 | 49% | 3164 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 24 | 414 | 50% | 3386 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3316 | 26 | 382 | 51% | 3309 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3131 | 25 | 444 | 51% | 3127 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3297 | 30 | 276 | 51% | 3287 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 31 | 268 | 48% | 3287 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3070 | 33 | 252 | 51% | 3042 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 37 | 184 | 50% | 3247 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3209 | 32 | 252 | 48% | 3224 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2977 | 34 | 240 | 48% | 2988 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |