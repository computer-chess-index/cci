# Engine: Ruffian

Author: Per-Ola Valfridsson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2004-02-01 | 2157<sub>(+13) | 2444<sub>(+5) | 2503<sub>(+20) |  |
| 1.0.5 | 2003-03-19 | 2144 | 2439 | 2483 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ruffian+<version>&body=###%20Engine%20name%0ARuffian%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 04:38:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.5", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 2600
  line "" [2144, 2157]
  line "STC (8.0+0.08s)" [2144, 2157]
  line "LTC (60.0+0.60s)" [2439, 2444]
  line "" [2483, 2503]
  line "VLTC (2m24s+1.12s)" [2483, 2503]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2503 | 51 | 132 | 50% | 2502 | 26% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2444 | 29 | 418 | 48% | 2464 | 22% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2157 | 24 | 650 | 50% | 2153 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2483 | 38 | 260 | 48% | 2506 | 22% |
| 1.0.5 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 15 | 1464 | 50% | 2441 | 24% |
| 1.0.5 | STC <sub>(8.0+0.08s)</sub> | 2144 | 16 | 1560 | 47% | 2205 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |