# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2664<sub>(+123) | 2989<sub>(+126) | 3102<sub>(+98) |  |
| 1.00netbin | 2026-04-13 | 2541<sub>(+2147) | 2863<sub>(+2408) | 3004<sub>(+2537) |  |
| 1.00 | 2026-04-12 | 394 | 455 | 467 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-27 06:25:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3200
  line "STC (8.0+0.08s)" [394, 2541, 2664]
  line "STC (8.0+0.08s)" [394, 2541, 2664]
  line "LTC (60.0+0.60s)" [455, 2863, 2989]
  line "VLTC (2m24s+1.12s)" [467, 3004, 3102]
  line "VLTC (2m24s+1.12s)" [467, 3004, 3102]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3102 | 25 | 450 | 52% | 3082 | 54% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 2989 | 27 | 396 | 51% | 2973 | 46% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2664 | 29 | 380 | 52% | 2647 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 3004 | 28 | 426 | 57% | 2785 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2863 | 25 | 546 | 59% | 2685 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2541 | 28 | 470 | 55% | 2380 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 467 | 58 | 176 | 24% | 1054 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 455 | 59 | 148 | 27% | 948 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 394 | 56 | 132 | 34% | 736 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |