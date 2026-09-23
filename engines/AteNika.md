# Engine: AteNika

Author: Yevhenii Sekhin

Home: https://github.com/LesterEvSe/AteNika

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-09-20 | 2728<sub>(+54) | 3090<sub>(+85) | 3139<sub>(+61) |  |
| 0.6.0 | 2026-09-13 | 2674<sub>(+634) | 3005<sub>(+688) | 3078<sub>(+728) |  |
| 0.5.0 | 2026-09-02 | 2040<sub>(+142) | 2317<sub>(+187) | 2350<sub>(+125) |  |
| 0.4.0 | 2026-08-30 | 1898 | 2130 | 2225 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+AteNika+<version>&body=###%20Engine%20name%0AAteNika%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-23 04:36:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1800 --> 3200
  line "" [1898, 2040, 2674, 2728]
  line "STC (8.0+0.08s)" [1898, 2040, 2674, 2728]
  line "LTC (60.0+0.60s)" [2130, 2317, 3005, 3090]
  line "" [2225, 2350, 3078, 3139]
  line "VLTC (2m24s+1.12s)" [2225, 2350, 3078, 3139]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3139 | 60 | 78 | 46% | 3174 | 54% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3090 | 57 | 88 | 56% | 3040 | 51% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 2728 | 69 | 64 | 53% | 2700 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3078 | 36 | 230 | 55% | 3029 | 48% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3005 | 36 | 222 | 53% | 2974 | 52% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2674 | 45 | 158 | 53% | 2639 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2350 | 36 | 262 | 50% | 2352 | 26% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2317 | 42 | 202 | 52% | 2298 | 21% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 2040 | 36 | 270 | 49% | 2056 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2225 | 38 | 248 | 48% | 2246 | 23% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2130 | 40 | 230 | 50% | 2134 | 15% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1898 | 38 | 248 | 50% | 1897 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |