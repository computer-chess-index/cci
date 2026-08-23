# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-07-11 | 2376<sub>(+289) | 2657<sub>(+234) | 2728<sub>(+201) |  |
| 1.0 | 2026-06-10 | 2087 | 2423 | 2527 |  |
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

Generated: 2026-08-23 06:24:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2087, 2376]
  line "STC (8.0+0.08s)" [2087, 2376]
  line "LTC (60.0+0.60s)" [2423, 2657]
  line "VLTC (2m24s+1.12s)" [2527, 2728]
  line "VLTC (2m24s+1.12s)" [2527, 2728]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2728 | 35 | 240 | 51% | 2719 | 50% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2657 | 31 | 320 | 49% | 2670 | 44% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2376 | 28 | 392 | 47% | 2402 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2527 | 32 | 316 | 50% | 2522 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2423 | 30 | 368 | 56% | 2358 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2087 | 36 | 276 | 52% | 2056 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |