# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-07-11 | 2376<sub>(+292) | 2653<sub>(+232) | 2724<sub>(+199) |  |
| 1.0 | 2026-06-10 | 2084 | 2421 | 2525 |  |
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

Generated: 2026-08-20 06:24:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2084, 2376]
  line "STC (8.0+0.08s)" [2084, 2376]
  line "LTC (60.0+0.60s)" [2421, 2653]
  line "VLTC (2m24s+1.12s)" [2525, 2724]
  line "VLTC (2m24s+1.12s)" [2525, 2724]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2724 | 36 | 220 | 51% | 2714 | 50% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2653 | 31 | 312 | 49% | 2669 | 44% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2376 | 29 | 384 | 47% | 2400 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2525 | 32 | 316 | 50% | 2519 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2421 | 30 | 368 | 56% | 2356 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2084 | 36 | 276 | 52% | 2053 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |