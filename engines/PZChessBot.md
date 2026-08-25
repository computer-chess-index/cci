# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3317<sub>(+23) | 3521<sub>(+39) | 3528<sub>(-1) |  |
| 7.0 | 2026-05-07 | 3294<sub>(+96) | 3482<sub>(+61) | 3529<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3198<sub>(+32) | 3421<sub>(+62) | 3476<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3166<sub>(+122) | 3359<sub>(+123) | 3420<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3044 | 3236 | 3267 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:28:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3044, 3166, 3198, 3294, 3317]
  line "STC (8.0+0.08s)" [3044, 3166, 3198, 3294, 3317]
  line "LTC (60.0+0.60s)" [3236, 3359, 3421, 3482, 3521]
  line "VLTC (2m24s+1.12s)" [3267, 3420, 3476, 3529, 3528]
  line "VLTC (2m24s+1.12s)" [3267, 3420, 3476, 3529, 3528]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 33 | 218 | 50% | 3524 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 31 | 236 | 50% | 3518 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3317 | 29 | 298 | 50% | 3318 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 25 | 362 | 50% | 3529 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 25 | 388 | 51% | 3475 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3294 | 28 | 340 | 50% | 3295 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 21 | 520 | 50% | 3475 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 23 | 464 | 50% | 3420 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3198 | 25 | 456 | 51% | 3190 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 28 | 312 | 50% | 3416 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 31 | 268 | 50% | 3359 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3166 | 32 | 264 | 49% | 3173 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3267 | 32 | 254 | 50% | 3256 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3236 | 38 | 184 | 53% | 3190 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3044 | 35 | 236 | 55% | 2961 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |