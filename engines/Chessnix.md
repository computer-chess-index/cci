# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2866<sub>(+15) | 3128<sub>(+74) | 3221<sub>(+67) |  |
| 1.3 | 2026-02-15 | 2851<sub>(+255) | 3054<sub>(+292) | 3154<sub>(+224) |  |
| 1.2 | 2025-12-12 | 2596<sub>(+283) | 2762<sub>(+170) | 2930<sub>(+265) |  |
| 1.0 | 2025-11-08 | 2313 | 2592 | 2665 | too many irregular games |
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

Generated: 2026-08-17 06:23:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2313, 2596, 2851, 2866]
  line "STC (8.0+0.08s)" [2313, 2596, 2851, 2866]
  line "LTC (60.0+0.60s)" [2592, 2762, 3054, 3128]
  line "VLTC (2m24s+1.12s)" [2665, 2930, 3154, 3221]
  line "VLTC (2m24s+1.12s)" [2665, 2930, 3154, 3221]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3221 | 41 | 160 | 53% | 3201 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 43 | 164 | 51% | 3119 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2866 | 44 | 156 | 49% | 2877 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 100 | 26 | 56% | 3112 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3054 | 75 | 52 | 46% | 3078 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2851 | 123 | 22 | 52% | 2828 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2930 | 158 | 12 | 46% | 2967 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 79 | 52 | 52% | 2745 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2596 | 150 | 16 | 63% | 2476 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2665 | 101 | 32 | 33% | 2808 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2592 | 145 | 16 | 41% | 2677 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2313 | 71 | 70 | 41% | 2390 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |