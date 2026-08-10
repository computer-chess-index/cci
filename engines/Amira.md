# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2287<sub>(+109) | 2531<sub>(+112) | 2618<sub>(+157) |  |
| 1.71 | 2025-10-30 | 2178 | 2419 | 2461 |  |
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

Generated: 2026-08-10 06:59:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "STC (8.0+0.08s)" [2178, 2287]
  line "STC (8.0+0.08s)" [2178, 2287]
  line "LTC (60.0+0.60s)" [2419, 2531]
  line "VLTC (2m24s+1.12s)" [2461, 2618]
  line "VLTC (2m24s+1.12s)" [2461, 2618]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | 2618 | 23 | 650 | 48% | 2634 | 29% |
| 1.82 | LTC <sub>(60.0+0.60s)</sub> | 2531 | 27 | 500 | 51% | 2515 | 23% |
| 1.82 | STC <sub>(8.0+0.08s)</sub> | 2287 | 24 | 638 | 50% | 2282 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | 2461 | 40 | 220 | 51% | 2452 | 21% |
| 1.71 | LTC <sub>(60.0+0.60s)</sub> | 2419 | 39 | 248 | 52% | 2408 | 17% |
| 1.71 | STC <sub>(8.0+0.08s)</sub> | 2178 | 43 | 206 | 51% | 2168 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |