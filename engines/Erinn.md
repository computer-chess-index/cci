# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-07-11 | 2390<sub>(+311) | 2681<sub>(+263) | 2718<sub>(+195) |  |
| 1.0 | 2026-06-10 | 2079 | 2418 | 2523 |  |
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

Generated: 2026-07-26 06:24:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2079, 2390]
  line "STC (8.0+0.08s)" [2079, 2390]
  line "LTC (60.0+0.60s)" [2418, 2681]
  line "VLTC (2m24s+1.12s)" [2523, 2718]
  line "VLTC (2m24s+1.12s)" [2523, 2718]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2718 | 40 | 182 | 51% | 2712 | 49% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 39 | 198 | 52% | 2668 | 42% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2390 | 33 | 280 | 49% | 2396 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2523 | 32 | 316 | 50% | 2516 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2418 | 30 | 368 | 56% | 2352 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2079 | 36 | 276 | 52% | 2047 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |