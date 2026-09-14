# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2681<sub>(+188) | 3029<sub>(+209) | 3119<sub>(+195) |  |
| 1.3.0 | 2026-03-30 | 2493<sub>(+365) | 2820<sub>(+383) | 2924<sub>(+401) |  |
| 1.2.0 | 2026-01-24 | 2128<sub>(+165) | 2437<sub>(+122) | 2523<sub>(+119) |  |
| 1.1.0 | 2026-01-09 | 1963<sub>(+new) | 2315<sub>(+new) | 2404<sub>(+new) |  |
| 1.0.0 | 2025-12-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:38:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "" [1963, 2128, 2493, 2681]
  line "STC (8.0+0.08s)" [1963, 2128, 2493, 2681]
  line "LTC (60.0+0.60s)" [2315, 2437, 2820, 3029]
  line "" [2404, 2523, 2924, 3119]
  line "VLTC (2m24s+1.12s)" [2404, 2523, 2924, 3119]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 27 | 400 | 50% | 3117 | 46% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3029 | 28 | 384 | 50% | 3027 | 46% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2681 | 28 | 428 | 48% | 2700 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2924 | 25 | 492 | 47% | 2947 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2820 | 30 | 358 | 50% | 2813 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2493 | 25 | 576 | 43% | 2553 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2523 | 33 | 312 | 52% | 2502 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2437 | 35 | 274 | 51% | 2425 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2128 | 33 | 328 | 52% | 2110 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2404 | 45 | 172 | 49% | 2419 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2315 | 43 | 208 | 50% | 2315 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1963 | 49 | 148 | 49% | 1978 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |