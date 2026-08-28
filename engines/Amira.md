# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2302<sub>(+115) | 2538<sub>(+112) | 2622<sub>(+154) |  |
| 1.71 | 2025-10-30 | 2187 | 2426 | 2468 |  |
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

Generated: 2026-08-28 06:22:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "" [2187, 2302]
  line "STC (8.0+0.08s)" [2187, 2302]
  line "LTC (60.0+0.60s)" [2426, 2538]
  line "" [2468, 2622]
  line "VLTC (2m24s+1.12s)" [2468, 2622]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | 2622 | 22 | 682 | 48% | 2641 | 29% |
| 1.82 | LTC <sub>(60.0+0.60s)</sub> | 2538 | 26 | 520 | 51% | 2523 | 24% |
| 1.82 | STC <sub>(8.0+0.08s)</sub> | 2302 | 23 | 662 | 51% | 2290 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | 2468 | 40 | 220 | 51% | 2458 | 21% |
| 1.71 | LTC <sub>(60.0+0.60s)</sub> | 2426 | 39 | 248 | 52% | 2417 | 17% |
| 1.71 | STC <sub>(8.0+0.08s)</sub> | 2187 | 43 | 206 | 51% | 2178 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |