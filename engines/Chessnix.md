# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2930<sub>(+new) | 3190<sub>(+new) | 3282<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2920<sub>(+256) | 3117<sub>(+289) | 3217<sub>(+224) |  |
| 1.2 | 2025-12-12 | 2664<sub>(+284) | 2828<sub>(+175) | 2993<sub>(+261) |  |
| 1.0 | 2025-11-08 | 2380<sub>(+new) | 2653<sub>(+new) | 2732<sub>(+new) | too many irregular games |
| 0.1 | 2025-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-16 06:23:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2380, 2664, 2920, 2930]
  line "STC (8.0+0.08s)" [2380, 2664, 2920, 2930]
  line "LTC (60.0+0.60s)" [2653, 2828, 3117, 3190]
  line "VLTC (2m24s+1.12s)" [2732, 2993, 3217, 3282]
  line "VLTC (2m24s+1.12s)" [2732, 2993, 3217, 3282]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3282 | 41 | 160 | 53% | 3263 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 43 | 164 | 51% | 3181 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2930 | 44 | 156 | 49% | 2940 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3217 | 100 | 26 | 56% | 3175 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3117 | 75 | 52 | 46% | 3141 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2920 | 123 | 22 | 52% | 2897 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2993 | 158 | 12 | 46% | 3029 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2828 | 78 | 52 | 52% | 2811 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2664 | 149 | 16 | 63% | 2543 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2732 | 100 | 32 | 33% | 2876 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2653 | 145 | 16 | 41% | 2738 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2380 | 71 | 70 | 41% | 2454 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |