# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3276<sub>(+14) | 3443<sub>(+6) | 3467<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3262<sub>(+25) | 3437<sub>(+19) | 3468<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3237 | 3418 | 3468 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:32:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3237, 3262, 3276]
  line "STC (8.0+0.08s)" [3237, 3262, 3276]
  line "LTC (60.0+0.60s)" [3418, 3437, 3443]
  line "VLTC (2m24s+1.12s)" [3468, 3468, 3467]
  line "VLTC (2m24s+1.12s)" [3468, 3468, 3467]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3467 | 12 | 1676 | 50% | 3467 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 12 | 1740 | 51% | 3438 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3276 | 12 | 1776 | 50% | 3278 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3468 | 32 | 228 | 46% | 3495 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3437 | 38 | 172 | 51% | 3429 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3262 | 36 | 208 | 48% | 3278 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3468 | 33 | 228 | 49% | 3475 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 36 | 192 | 51% | 3410 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3237 | 29 | 308 | 50% | 3237 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |