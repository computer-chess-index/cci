# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2684<sub>(+192) | 3028<sub>(+209) | 3116<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2492<sub>(+364) | 2819<sub>(+382) | 2923<sub>(+401) |  |
| 1.2.0 | 2026-01-24 | 2128<sub>(+165) | 2437<sub>(+122) | 2522<sub>(+118) |  |
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

Generated: 2026-09-09 04:39:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "" [1963, 2128, 2492, 2684]
  line "STC (8.0+0.08s)" [1963, 2128, 2492, 2684]
  line "LTC (60.0+0.60s)" [2315, 2437, 2819, 3028]
  line "" [2404, 2522, 2923, 3116]
  line "VLTC (2m24s+1.12s)" [2404, 2522, 2923, 3116]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3116 | 27 | 392 | 50% | 3116 | 46% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3028 | 28 | 384 | 50% | 3025 | 46% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2684 | 28 | 412 | 48% | 2701 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2923 | 25 | 492 | 47% | 2946 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2819 | 30 | 358 | 50% | 2812 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2492 | 25 | 576 | 43% | 2552 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2522 | 33 | 312 | 52% | 2502 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2437 | 35 | 274 | 51% | 2423 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2128 | 33 | 328 | 52% | 2109 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2404 | 45 | 172 | 49% | 2418 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2315 | 43 | 208 | 50% | 2315 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1963 | 49 | 148 | 49% | 1978 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |