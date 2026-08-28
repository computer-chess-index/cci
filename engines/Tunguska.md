# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-04-08 | 2811<sub>(+309) | 3146<sub>(+299) | 3209<sub>(+282) |  |
| 2.0 | 2026-03-18 | 2502 | 2847 | 2927 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tunguska+<version>&body=###%20Engine%20name%0ATunguska%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-28 06:37:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2502, 2811]
  line "STC (8.0+0.08s)" [2502, 2811]
  line "LTC (60.0+0.60s)" [2847, 3146]
  line "" [2927, 3209]
  line "VLTC (2m24s+1.12s)" [2927, 3209]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3209 | 24 | 484 | 50% | 3206 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 25 | 438 | 52% | 3125 | 58% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2811 | 24 | 528 | 48% | 2828 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2927 | 30 | 356 | 51% | 2911 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2847 | 31 | 328 | 50% | 2839 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2502 | 31 | 368 | 50% | 2495 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |