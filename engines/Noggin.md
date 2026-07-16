# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2630<sub>(+42) | 2873<sub>(+57) | 2892<sub>(-31) |  |
| 2.0 | 2026-06-14 | 2588<sub>(+new) | 2816<sub>(+new) | 2923<sub>(+new) |  |
| 1.0 | 2026-06-09 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Noggin+<version>&body=###%20Engine%20name%0ANoggin%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:26:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2588, 2630]
  line "STC (8.0+0.08s)" [2588, 2630]
  line "LTC (60.0+0.60s)" [2816, 2873]
  line "VLTC (2m24s+1.12s)" [2923, 2892]
  line "VLTC (2m24s+1.12s)" [2923, 2892]
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
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2588, 2630]
  line "STC (8.0+0.08s)" [2588, 2630]
  line "LTC (60.0+0.60s)" [2816, 2873]
  line "VLTC (2m24s+1.12s)" [2923, 2892]
  line "VLTC (2m24s+1.12s)" [2923, 2892]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2892 | 52 | 112 | 50% | 2889 | 40% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2873 | 50 | 116 | 53% | 2843 | 45% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2630 | 57 | 100 | 47% | 2654 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2923 | 49 | 128 | 56% | 2876 | 41% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2816 | 56 | 92 | 51% | 2804 | 46% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2588 | 52 | 124 | 44% | 2643 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |