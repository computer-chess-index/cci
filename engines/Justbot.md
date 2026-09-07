# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3289<sub>(+227) | 3447<sub>(+175) | 3514<sub>(+190) |  |
| 0.3.0 | 2026-07-19 | 3062<sub>(+486) | 3272<sub>(+382) | 3324<sub>(+363) |  |
| 0.2.0 | 2026-06-24 | 2576<sub>(+554) | 2890<sub>(+575) | 2961<sub>(+550) |  |
| 0.1.0 | 2026-06-09 | 2022 | 2315 | 2411 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-07 04:39:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "" [2022, 2576, 3062, 3289]
  line "STC (8.0+0.08s)" [2022, 2576, 3062, 3289]
  line "LTC (60.0+0.60s)" [2315, 2890, 3272, 3447]
  line "" [2411, 2961, 3324, 3514]
  line "VLTC (2m24s+1.12s)" [2411, 2961, 3324, 3514]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 81 | 36 | 56% | 3472 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 66 | 56 | 51% | 3436 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3289 | 59 | 76 | 47% | 3306 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3324 | 27 | 368 | 53% | 3302 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 28 | 332 | 51% | 3266 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3062 | 29 | 352 | 51% | 3051 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2961 | 37 | 212 | 50% | 2950 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2890 | 32 | 296 | 47% | 2909 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2576 | 36 | 252 | 46% | 2615 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2411 | 36 | 278 | 49% | 2433 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2315 | 35 | 284 | 49% | 2323 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2022 | 37 | 266 | 48% | 2036 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |