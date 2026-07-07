# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1929<sub>(+551) | 2182<sub>(+557) | 2279<sub>(+520) |  |
| 1.0.0 | 2025-12-31 | 1378 | 1625 | 1759 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Akerbeltz+<version>&body=###%20Engine%20name%0AAkerbeltz%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:22:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2300
  line "STC (8.0+0.08s)" [1378, 1929]
  line "STC (8.0+0.08s)" [1378, 1929]
  line "LTC (60.0+0.60s)" [1625, 2182]
  line "VLTC (2m24s+1.12s)" [1759, 2279]
  line "VLTC (2m24s+1.12s)" [1759, 2279]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2300
  line "STC (8.0+0.08s)" [1378, 1929]
  line "STC (8.0+0.08s)" [1378, 1929]
  line "LTC (60.0+0.60s)" [1625, 2182]
  line "VLTC (2m24s+1.12s)" [1759, 2279]
  line "VLTC (2m24s+1.12s)" [1759, 2279]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2279 | 29 | 436 | 49% | 2296 | 20% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2182 | 29 | 424 | 48% | 2202 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1929 | 28 | 480 | 48% | 1953 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1759 | 41 | 230 | 41% | 1893 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1625 | 48 | 164 | 43% | 1719 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1378 | 45 | 184 | 40% | 1501 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |