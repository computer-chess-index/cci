# Engine: Stockfish

Author: <a href="https://github.com/official-stockfish/Stockfish/blob/master/AUTHORS" target="_blank">Stockfish Authors</a>

Home: https://github.com/official-stockfish/Stockfish

## Ratings Verlauf

```mermaid
xychart-beta
  x-axis ["16.0", "16.1", "17.0", "17.1", "18.0"]
  y-axis "Elo Rating" 0 --> 3300
  line "STC (8.0+0.08s)" [3505, 3521, 3511, 3514, 3542]
  line "LTC (60.0+0.60s)" [3596, 3583, 3606, 3617, 3617]
  line "VLTC (2m24s+1.12s)" [3610, 3623, 3627, 3636, 3654]
```

## Ratings nach Version

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 18.0 | 2026-01-31 | 3542<sub>(+28) | 3617<sub>(0) | 3654<sub>(+18) |  |
| 17.1 | 2025-03-30 | 3514<sub>(+3) | 3617<sub>(+11) | 3636<sub>(+9) |  |
| 17.0 | 2024-09-06 | 3511<sub>(-10) | 3606<sub>(+23) | 3627<sub>(+4) |  |
| 16.1 | 2024-02-24 | 3521<sub>(+16) | 3583<sub>(-13) | 3623<sub>(+13) |  |
| 16.0 | 2023-06-30 | 3505<sub>(new) | 3596<sub>(new) | 3610<sub>(new) |  |
| 15.1 | 2022-12-04 |  |  |  |  |
| 15.0 | 2022-04-18 |  |  |  |  |
| 14.1 | 2021-10-28 |  |  |  |  |
| 14.0 | 2021-07-02 |  |  |  |  |
| 13.0 | 2021-02-19 |  |  |  |  |
| 12.0 | 2020-09-02 |  |  |  |  |
| 11.0 | 2020-01-18 |  |  |  |  |
| 10.0 | 2018-11-29 |  |  |  |  |
| 9.0 | 2018-02-01 |  |  |  |  |
| 7.0 | 2016-01-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-02-10 19:01:39