# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3268<sub>(+14) | 3434<sub>(+5) | 3459<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3254<sub>(+25) | 3429<sub>(+19) | 3460<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3229 | 3410 | 3460 |  |
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

Generated: 2026-08-12 08:23:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3229, 3254, 3268]
  line "STC (8.0+0.08s)" [3229, 3254, 3268]
  line "LTC (60.0+0.60s)" [3410, 3429, 3434]
  line "VLTC (2m24s+1.12s)" [3460, 3460, 3459]
  line "VLTC (2m24s+1.12s)" [3460, 3460, 3459]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3459 | 12 | 1672 | 50% | 3459 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 12 | 1736 | 51% | 3430 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3268 | 12 | 1768 | 50% | 3270 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 32 | 228 | 46% | 3487 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3429 | 38 | 172 | 51% | 3421 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3254 | 36 | 208 | 48% | 3270 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 33 | 228 | 49% | 3467 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 36 | 192 | 51% | 3402 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3229 | 29 | 308 | 50% | 3231 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |