# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-07-11 | 2379<sub>(+286) | 2677<sub>(+248) | 2732<sub>(+197) |  |
| 1.0 | 2026-06-10 | 2093 | 2429 | 2535 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Erinn+<version>&body=###%20Engine%20name%0AErinn%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:37:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2000 --> 2800
  line "" [2093, 2379]
  line "STC (8.0+0.08s)" [2093, 2379]
  line "LTC (60.0+0.60s)" [2429, 2677]
  line "" [2535, 2732]
  line "VLTC (2m24s+1.12s)" [2535, 2732]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2732 | 31 | 288 | 50% | 2730 | 52% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2677 | 28 | 380 | 51% | 2677 | 45% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2379 | 27 | 440 | 47% | 2402 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2535 | 32 | 316 | 50% | 2529 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2429 | 30 | 368 | 56% | 2364 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2093 | 36 | 276 | 52% | 2061 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |