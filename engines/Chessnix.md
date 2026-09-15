# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2880<sub>(+15) | 3143<sub>(+74) | 3235<sub>(+67) |  |
| 1.3 | 2026-02-15 | 2865<sub>(+255) | 3069<sub>(+293) | 3168<sub>(+225) |  |
| 1.2 | 2025-12-12 | 2610<sub>(+284) | 2776<sub>(+172) | 2943<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2326 | 2604 | 2680 | too many irregular games |
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

Generated: 2026-09-15 04:37:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2326, 2610, 2865, 2880]
  line "STC (8.0+0.08s)" [2326, 2610, 2865, 2880]
  line "LTC (60.0+0.60s)" [2604, 2776, 3069, 3143]
  line "" [2680, 2943, 3168, 3235]
  line "VLTC (2m24s+1.12s)" [2680, 2943, 3168, 3235]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 41 | 160 | 53% | 3216 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 43 | 164 | 51% | 3133 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2880 | 44 | 156 | 49% | 2890 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 100 | 26 | 56% | 3127 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3069 | 75 | 52 | 46% | 3093 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2865 | 123 | 22 | 52% | 2843 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2943 | 158 | 12 | 46% | 2981 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2776 | 79 | 52 | 52% | 2758 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2610 | 150 | 16 | 63% | 2489 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2680 | 101 | 32 | 33% | 2823 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2604 | 146 | 16 | 41% | 2689 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2326 | 71 | 70 | 41% | 2402 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |