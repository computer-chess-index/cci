# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-03-31 | 2476<sub>(+96) | 2797<sub>(+89) | 2861<sub>(+68) |  |
| 5.3 | 2025-09-26 | 2380<sub>(+new) | 2708<sub>(+new) | 2793<sub>(+new) |  |
| 5.1 | 2024-03-24 |  |  |  |  |
| 5.0 | 2021-04-07 |  |  |  |  |
| 4.2 | 2020-09-23 |  |  |  |  |
| 4.0 | 2020-01-24 |  |  |  |  |
| 3.0 | 2019-02-23 |  |  |  |  |
| 2.1 | 2019-01-14 |  |  |  |  |
| 2.0 | 2018-11-26 |  |  |  |  |
| 1.5 | 2018-07-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:28:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2380, 2476]
  line "STC (8.0+0.08s)" [2380, 2476]
  line "LTC (60.0+0.60s)" [2708, 2797]
  line "VLTC (2m24s+1.12s)" [2793, 2861]
  line "VLTC (2m24s+1.12s)" [2793, 2861]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 28 | 388 | 49% | 2867 | 42% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2797 | 30 | 342 | 50% | 2799 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2476 | 27 | 444 | 49% | 2491 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2793 | 31 | 312 | 48% | 2811 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2708 | 32 | 310 | 52% | 2691 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2380 | 28 | 420 | 50% | 2377 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |