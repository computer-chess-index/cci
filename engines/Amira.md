# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2307<sub>(+115) | 2547<sub>(+114) | 2631<sub>(+156) |  |
| 1.71 | 2025-10-30 | 2192 | 2433 | 2475 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Amira+<version>&body=###%20Engine%20name%0AAmira%0A%0A###%20Version%0A1.82" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-25 04:35:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "" [2192, 2307]
  line "STC (8.0+0.08s)" [2192, 2307]
  line "LTC (60.0+0.60s)" [2433, 2547]
  line "" [2475, 2631]
  line "VLTC (2m24s+1.12s)" [2475, 2631]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | 2631 | 22 | 710 | 48% | 2647 | 29% |
| 1.82 | LTC <sub>(60.0+0.60s)</sub> | 2547 | 25 | 544 | 51% | 2533 | 24% |
| 1.82 | STC <sub>(8.0+0.08s)</sub> | 2307 | 23 | 690 | 51% | 2294 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | 2475 | 40 | 220 | 51% | 2465 | 21% |
| 1.71 | LTC <sub>(60.0+0.60s)</sub> | 2433 | 39 | 248 | 52% | 2423 | 17% |
| 1.71 | STC <sub>(8.0+0.08s)</sub> | 2192 | 43 | 206 | 51% | 2183 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |