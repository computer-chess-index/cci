# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2118<sub>(+217) | 2376<sub>(+220) | 2414<sub>(+161) |  |
| 2.0 | 2026-03-08 | 1901 | 2156 | 2253 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeno+<version>&body=###%20Engine%20name%0AZeno%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:29:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [1901, 2118]
  line "STC (8.0+0.08s)" [1901, 2118]
  line "LTC (60.0+0.60s)" [2156, 2376]
  line "" [2253, 2414]
  line "VLTC (2m24s+1.12s)" [2253, 2414]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2414 | 36 | 264 | 51% | 2403 | 29% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2376 | 35 | 284 | 50% | 2377 | 21% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2118 | 37 | 264 | 52% | 2094 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2253 | 30 | 384 | 49% | 2273 | 24% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2156 | 28 | 460 | 49% | 2163 | 21% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1901 | 27 | 482 | 48% | 1920 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |