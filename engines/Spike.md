# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2402<sub>(+56) | 2719<sub>(-20) | 2834<sub>(+4) |  |
| 1.4 | 2011-02-01 | 2346 | 2739 | 2830 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Spike+<version>&body=###%20Engine%20name%0ASpike%0A%0A###%20Version%0A1.4.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:42:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2346, 2402]
  line "STC (8.0+0.08s)" [2346, 2402]
  line "LTC (60.0+0.60s)" [2739, 2719]
  line "" [2830, 2834]
  line "VLTC (2m24s+1.12s)" [2830, 2834]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2834 | 37 | 238 | 50% | 2838 | 35% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2719 | 35 | 278 | 50% | 2716 | 29% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 2402 | 35 | 268 | 51% | 2392 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2830 | 45 | 164 | 51% | 2828 | 32% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2739 | 48 | 144 | 50% | 2736 | 27% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2346 | 32 | 404 | 45% | 2415 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |